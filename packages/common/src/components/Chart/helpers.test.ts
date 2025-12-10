import { describe, expect, it } from "vitest";
import { getPayloadConfigFromPayload } from "./helpers";

describe("Chart helpers", () => {
  describe("getPayloadConfigFromPayload", () => {
    const mockConfig = {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
      mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
      },
      revenue: {
        label: "Revenue",
        color: "hsl(var(--chart-3))",
      },
    };

    it("returns undefined for non-object payload", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = getPayloadConfigFromPayload(mockConfig, null as any, "desktop");
      expect(result).toBeUndefined();
    });

    it("returns config for direct key match", () => {
      const payload = {
        dataKey: "desktop",
        value: 100,
      };

      const result = getPayloadConfigFromPayload(mockConfig, payload, "desktop");
      expect(result).toEqual(mockConfig.desktop);
    });

    it("returns config when key exists in payload", () => {
      const payload = {
        desktop: "desktop",
        value: 100,
      };

      const result = getPayloadConfigFromPayload(mockConfig, payload, "desktop");
      expect(result).toEqual(mockConfig.desktop);
    });

    it("returns config when key exists in payload.payload", () => {
      const payload = {
        payload: {
          desktop: "desktop",
        },
        value: 100,
      };

      const result = getPayloadConfigFromPayload(mockConfig, payload, "desktop");
      expect(result).toEqual(mockConfig.desktop);
    });

    it("returns undefined when key not in config", () => {
      const payload = {
        dataKey: "unknown",
        value: 100,
      };

      const result = getPayloadConfigFromPayload(mockConfig, payload, "unknown");
      expect(result).toBeUndefined();
    });

    it("handles nested payload with string value", () => {
      const payload = {
        payload: {
          category: "mobile",
        },
        value: 80,
      };

      const result = getPayloadConfigFromPayload(mockConfig, payload, "category");
      expect(result).toEqual(mockConfig.mobile);
    });

    it("returns fallback config when configLabelKey not found", () => {
      const payload = {
        dataKey: "revenue",
        value: 500,
      };

      const result = getPayloadConfigFromPayload(mockConfig, payload, "revenue");
      expect(result).toEqual(mockConfig.revenue);
    });

    it("handles payload with both direct and nested keys", () => {
      const payload = {
        mobile: "mobile",
        payload: {
          desktop: "desktop",
        },
        value: 100,
      };

      // Should prioritize direct key over nested
      const result = getPayloadConfigFromPayload(mockConfig, payload, "mobile");
      expect(result).toEqual(mockConfig.mobile);
    });

    it("handles empty config", () => {
      const payload = {
        dataKey: "desktop",
        value: 100,
      };

      const result = getPayloadConfigFromPayload({}, payload, "desktop");
      expect(result).toBeUndefined();
    });

    it("handles payload with non-string key value", () => {
      const payload = {
        desktop: 123, // non-string value
        value: 100,
      };

      const result = getPayloadConfigFromPayload(mockConfig, payload, "desktop");
      expect(result).toEqual(mockConfig.desktop);
    });
  });
});
