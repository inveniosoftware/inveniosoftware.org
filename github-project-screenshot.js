import puppeteer from "puppeteer";
import path from "path";

// Check if the CI environment variable is set to "true"
const isCI = process.env.CI === "true";

const puppeteerOptions = {
  headless: "new",
  // If we are in a CI environment, add the --no-sandbox argument
  // to avoid the `No usable sandbox!` error for Ubuntu > 22
  args: isCI ? ["--no-sandbox", "--disable-setuid-sandbox"] : [],
};

const config = {
  screenshotDir: "_site/assets/images", // Where to save screenshots
  pagesToScreenshot: [
    {
      name: "GitHub Project Board",
      url: "https://github.com/orgs/inveniosoftware/projects/80",
      filename: "github-roadmap.png",
    },
  ],
  viewport: { width: 1800, height: 800 },
  delay: 500, // Optional: milliseconds to wait after page load before screenshotting
};

async function takeScreenshot(name, url, outputPath, viewport, delay) {
  console.log(`About to take a screenshot of ${name} at ${url}`);
  let browser;
  try {
    browser = await puppeteer.launch(puppeteerOptions);
    const page = await browser.newPage();
    await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);
    await page.setViewport(viewport);
    await page.goto(url, { waitUntil: "networkidle0" }); // Wait for network to be idle

    if (delay) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    console.log(`Taking screenshot: ${outputPath}`);
    await page.screenshot({ path: outputPath, fullPage: true }); // fullPage: true captures entire scrollable page
    console.log(`Screenshot saved: ${outputPath}`);
  } catch (error) {
    console.error(`Error taking screenshot for ${url}:`, error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

async function generateScreenshots() {
  for (const page of config.pagesToScreenshot) {
    const outputPath = path.join(config.screenshotDir, page.filename);
    await takeScreenshot(
      page.name,
      page.url,
      outputPath,
      config.viewport,
      config.delay
    );
  }
}

generateScreenshots()
  .then(() => console.log("All screenshots generated."))
  .catch((err) => console.error("Screenshot generation failed:", err));
