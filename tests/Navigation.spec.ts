import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Home-Page';
import { MarketPlace } from '../pages/Marketplace-Page';

test('Navigation to Marketplace', async ({ page }) => {
  
  const homepage = new HomePage(page);
  const marketplace = new MarketPlace(page);

  await homepage.visit()
  await homepage.validatepage()
  await homepage.selectMarketplace
  await marketplace.validatepage()

});

test('Navigation to Activity', async ({ page }) => {
  
    const homepage = new HomePage(page);
    const marketplace = new MarketPlace(page);
  
    await homepage.visit()
    await homepage.validatepage()
    await homepage.selectActivity()
    await marketplace.validatepage()
  
  });