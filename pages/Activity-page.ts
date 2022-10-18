import { expect, Page } from "@playwright/test";


export class ActivityPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
  
  async visit() {
      await this.page.goto("https://www.knownorigin.io/activity");
  }

  async validatepage() {
    await expect(this.page).toHaveURL(
      "https://www.knownorigin.io/thispage"
    );
    await expect(this.page).toHaveTitle(
      "KnownOrigin | Digital Art Marketplace | NFT Crypto Art"
    );
  }
}