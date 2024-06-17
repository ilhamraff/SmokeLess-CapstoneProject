/* eslint-disable no-undef */
Feature('HomePage');

Before(({ I }) => {
  I.amOnPage('/#/home');
});

Scenario('Testing Next to Content Button', ({ I }) => {
  I.see('Baca Selengkapnya ');
  I.click('#next-button');
  I.seeElement('.cigarette-content');
});

Scenario('Testing Comment Feature', ({ I }) => {
  I.seeElement('#comment-form');

  I.seeElement('#commentatorName');
  I.fillField('#commentatorName', 'Rauldi Ahmad');

  I.seeElement('#commentatorComment');
  I.fillField('#commentatorComment', 'Website baik, Tujuan baik, Developer Baik');

  I.click('Publish');
});
