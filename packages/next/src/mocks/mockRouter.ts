import { vi } from "vitest";
import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";

vi.mock("next/router", () => vi.importActual("next-router-mock"));

mockRouter.useParser(
  createDynamicRouteParser([
    // @see https://github.com/scottrippey/next-router-mock#dynamic-routes
  ])
);

vi.mock("next/navigation", async (importOriginal) => {
  const actual = await importOriginal<typeof import("next/navigation")>();
  const { useRouter } = await vi.importActual<
    typeof import("next-router-mock")
  >("next-router-mock");

  const usePathname = vi.fn().mockImplementation(() => {
    const router = useRouter();
    return router.pathname;
  });

  const useSearchParams = vi.fn().mockImplementation(() => {
    const router = useRouter();
    return new URLSearchParams(router.query?.toString());
  });

  return {
    ...actual,
    useRouter: vi.fn().mockImplementation(useRouter),
    usePathname,
    useSearchParams,
  };
});
