/* eslint-disable no-undef */
Feature('ArticlePage');

Before(({ I }) => {
  I.amOnPage('/#/article');
});

Scenario('Check the article detail page', ({ I }) => {
  I.seeElement('.article-content');
  I.seeElement('.articles-container');

  I.click('.article-item');

  I.seeElement('.detail-article');
  I.seeElement('.detail-aside');
});

Scenario('testing the article search feature', ({ I }) => {
  I.seeElement('#searchInput');

  I.fillField('#searchInput', 'Dukungan Sosial');

  I.see('Peran Dukungan Sosial dalam Berhenti Merokok');
});

Scenario('Upload file and submit form', ({ I }) => {
  I.click('Buat Artikel');

  I.seeElement('#article-form');

  I.attachFile('form input[name=thumbnail]', 'src/public/images/Logo.png');
  I.fillField('#author', 'John Doe');
  I.fillField('#title', 'Contoh Judul Artikel');
  I.fillField('div[role=textbox]', 'Ini adalah contoh isi artikel.');

  I.click('Tambah Artikel');
  I.click('Ya');

  I.see('Berhasil Menambah Artikel');
});

Scenario('Clear Form', async ({ I }) => {
  I.click('Buat Artikel');

  I.attachFile('form input[name=thumbnail]', 'src/public/images/Logo.png');
  I.fillField('#author', 'John Doe');
  I.fillField('#title', 'Contoh Judul Artikel');
  I.fillField('div[role=textbox]', 'Ini adalah contoh isi artikel.');

  I.click('Bersihkan Form');

  I.dontSeeInField('form input[name=thumbnail]', 'src/public/images/Logo.png');
  I.dontSeeInField('#author', 'John Doe');
  I.dontSeeInField('#title', 'Artikel Contoh');
  I.dontSeeInField('div[role=textbox]', 'Ini adalah contoh isi artikel.');
});
