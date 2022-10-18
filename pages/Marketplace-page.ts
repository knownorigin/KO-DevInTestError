import { expect, Page } from "@playwright/test";


export class MarketPlace {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async visit() {
        await this.page.goto("https://www.knownorigin.io");
      }
  
    async validatepage() {
        await expect(this.page).toHaveURL(
          "https://www.knownorigin.io/marketplace"
        );
        await expect(this.page).toHaveTitle(
          "NFT Search | KnownOrigin"
        );
      }

  async filter_sale_buynow() {
    await this.page.locator("[data-cy=buynow_btn]").click();
  }

}