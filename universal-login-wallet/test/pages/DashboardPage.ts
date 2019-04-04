import {ReactWrapper} from 'enzyme';
import {Contract} from 'ethers';
import {sleep} from 'universal-login-commons';

export default class DashboardPage {
  constructor(private wrapper : ReactWrapper) {
  }

  clickTransferButton() {
    this.wrapper.find('#transferFunds').simulate('click');
    this.wrapper.update();
  }

  disconnect() {
    this.wrapper.find('.sign-out-btn').simulate('click');
  }

  async getBalance(mockTokenContract : Contract, walletAddress: string) {
    // TODO: walletAddress Should be taken from UI
    await sleep(300);
    const tokenBalance = await mockTokenContract.balanceOf(walletAddress);
    return tokenBalance.toString();
  }

  getWalletBalance() {
    return this.wrapper.find('span.balance-amount-highlighted').props().children;
  }

  isNotificationAlert() {
    console.log(this.wrapper.debug());
  }
}
