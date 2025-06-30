export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async openDemoblaze() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async openBlogspot() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  async nopeCommerce() {
    await this.page.goto('https://demo.nopcommerce.com/register');
  }

  async openSource() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }
}
