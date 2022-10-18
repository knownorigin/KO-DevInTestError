import { expect, Page } from "@playwright/test";


export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
  
  async visit() {
      await this.page.goto("https://www.knownorigin.io");
  }

  async validatepage() {
    await expect(this.page).toHaveURL(
      "https://www.knownorigin.io/"
    );
    await expect(this.page).toHaveTitle(
      "KnownOrigin | Digital Art Marketplace | NFT Crypto Art"
    );
  }

  async selectMarketplace() {
    await this.page.locator("[data-cy=marketplace_nav]").click();
  }

  async selectActivity() {
    await this.page.locator("[data-cy=activity_nav]").click();
  }

  async selectCommunity() {
    await this.page.locator("[data-cy=community_nav]").click();
  }

  async selectCollections() {
    this.selectCommunity();
    const navbardropdown = await this.page.locator(".navbar-dropdown");
    await this.page.locator("[data-cy=collections_nav]").click();
  }
  
}