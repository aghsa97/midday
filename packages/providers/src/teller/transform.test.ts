import { expect, test } from "bun:test";
import { transformTransaction } from "./transform";

test("Transform pending transaction", () => {
  expect(
    transformTransaction({
      bankAccountId: "123",
      teamId: "123",
      transaction: {
        type: "check",
        status: "pending",
        running_balance: null,
        links: {
          self: "https://api.teller.io/accounts/acc_os41qe3a66ks2djhss000/transactions/txn_os41r5u90e29shubl2000",
          account: "https://api.teller.io/accounts/acc_os41qe3a66ks2djhss000",
        },
        id: "txn_os41r5u90e29shubl2000",
        details: {
          processing_status: "complete",
          counterparty: {
            type: "organization",
            name: "BANK OF MANY",
          },
          category: "general",
        },
        description: "Online Check Deposit",
        date: "2024-03-05",
        amount: "83.62",
        account_id: "acc_os41qe3a66ks2djhss000",
      },
    })
  ).toMatchSnapshot();
});

test("Transform card payment transaction", () => {
  expect(
    transformTransaction({
      bankAccountId: "123",
      teamId: "123",
      transaction: {
        type: "card_payment",
        status: "posted",
        running_balance: "83431.46",
        links: {
          self: "https://api.teller.io/accounts/acc_os41qe3a66ks2djhss000/transactions/txn_os41r5u90e29shubl2005",
          account: "https://api.teller.io/accounts/acc_os41qe3a66ks2djhss000",
        },
        id: "txn_os41r5u90e29shubl2005",
        details: {
          processing_status: "complete",
          counterparty: {
            type: "organization",
            name: "NORDSTROM",
          },
          category: "shopping",
        },
        description: "Nordstrom",
        date: "2024-03-01",
        amount: "-68.90",
        account_id: "acc_os41qe3a66ks2djhss000",
      },
    })
  ).toMatchSnapshot();
});
