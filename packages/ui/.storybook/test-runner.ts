import type { TestHook, TestRunnerConfig } from "@storybook/test-runner";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { getStoryContext, waitForPageReady } from "@storybook/test-runner";
import { checkA11y, injectAxe } from "axe-playwright";
import { toMatchImageSnapshot } from "jest-image-snapshot";

const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 };
const CUSTOM_SNAPSHOTS_DIR = `${process.cwd()}/.storybook/__snapshots__`;
const CUSTOM_DIFF_DIR = `${CUSTOM_SNAPSHOTS_DIR}/__diff__`;

const setupPageViewport: TestHook = async (page, story) => {
  // Accesses the story's parameters and retrieves the viewport used to render it
  const context = await getStoryContext(page, story);
  const viewportName = context.parameters?.viewport?.defaultViewport;
  const viewportParameter = MINIMAL_VIEWPORTS[viewportName];

  page.setViewportSize(
    (viewportParameter?.styles ?? DEFAULT_VIEWPORT_SIZE) as { width: number; height: number }
  );
};

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async preVisit(page, story) {
    // Setup page viewport size
    await setupPageViewport(page, story);
    await injectAxe(page);
  },
  async postVisit(page, story) {
    // Awaits for the page to be loaded and available including assets (e.g., fonts)
    await waitForPageReady(page);

    // Generates a snapshot file based on the story identifier
    const image = await page.locator("#storybook-root").screenshot();

    expect(image).toMatchImageSnapshot({
      customDiffDir: CUSTOM_DIFF_DIR,
      customSnapshotsDir: CUSTOM_SNAPSHOTS_DIR,
      customSnapshotIdentifier: story.id,
      failureThreshold: 1,
      failureThresholdType: "percent",
    });

    await checkA11y(
      page,
      "#storybook-root",
      {
        detailedReport: true,
        detailedReportOptions: {
          html: true,
        },
      },
      true // do not fail test, only warn
    );
  },
};

export default config;
