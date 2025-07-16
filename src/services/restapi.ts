import { ref } from "vue";
import { useGeneralStore } from "@/stores/general";
import { useNotificationStore } from '@/stores/notification'

const { apiBaseURL, isDev } = useGeneralStore()

const { showWarning } = useNotificationStore()

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export function useRestApi(baseURL = apiBaseURL) {
  const loading = ref(false);

  async function request<T>(
    endpoint: string,
    method: HttpMethod = "GET",
    body?: unknown
  ): Promise<ApiResponse<T>> {
    loading.value = true;
    const isFormdata = body && body instanceof FormData;

    const headers: Record<string, string> = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    if (!isFormdata) {
      headers["Content-Type"] = "application/json";
    }

    try {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method,
        headers,
        body: body
          ? isFormdata
            ? (body as globalThis.BodyInit)
            : JSON.stringify(body)
          : undefined,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = (await response.json()) as T;
      return { data, error: null, loading: false };
    } catch (err) {
      const error = err instanceof Error ? err.message : "Unknown error"

      if (isDev) {
        showWarning(error, 15000);
      }

      return {
        data: null,
        error,
        loading: false,
      };
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    request,
    get: <T>(endpoint: string) => request<T>(endpoint),
    post: <T>(endpoint: string, body: unknown, contentType: string = "") =>
      request<T>(endpoint, "POST", body, contentType),
    put: <T>(endpoint: string, body: unknown) =>
      request<T>(endpoint, "PUT", body),
    patch: <T>(endpoint: string, body: unknown) =>
      request<T>(endpoint, "PATCH", body),
    delete: <T>(endpoint: string) => request<T>(endpoint, "DELETE"),
  };
}
