/* eslint-disable no-undef */
Feature('SurveyPage');

Before(({ I }) => {
  I.amOnPage('/#/survey');
});

Scenario('Fill in and submit the smoking addiction form', ({ I }) => {
  I.seeElement('#formPerokok');

  I.checkOption('input[name="age"]');
  I.checkOption('input[name="gender"]');
  I.checkOption('input[name="education"]');
  I.checkOption('input[name="occupation"]');
  I.checkOption('input[name="q1"]');
  I.checkOption('input[name="q2"]');
  I.checkOption('input[name="q3"]');
  I.checkOption('input[name="q4"]');
  I.checkOption('input[name="q5"]');
  I.checkOption('input[name="q6"]');

  I.click('Hitung Kecanduan');

  I.seeElement('.progress-bar');
});

Scenario('Clear form answers', ({ I }) => {
  I.seeElement('#formPerokok');

  I.checkOption('input[name="age"]');
  I.checkOption('input[name="gender"]');
  I.checkOption('input[name="education"]');
  I.checkOption('input[name="occupation"]');
  I.checkOption('input[name="q1"]');
  I.checkOption('input[name="q2"]');
  I.checkOption('input[name="q3"]');
  I.checkOption('input[name="q4"]');
  I.checkOption('input[name="q5"]');
  I.checkOption('input[name="q6"]');

  I.click('Bersihkan Jawaban');

  I.dontSeeCheckboxIsChecked('input[name="age"]');
  I.dontSeeCheckboxIsChecked('input[name="gender"]');
  I.dontSeeCheckboxIsChecked('input[name="education"]');
  I.dontSeeCheckboxIsChecked('input[name="occupation"]');
  I.dontSeeCheckboxIsChecked('input[name="q1"]');
  I.dontSeeCheckboxIsChecked('input[name="q2"]');
  I.dontSeeCheckboxIsChecked('input[name="q3"]');
  I.dontSeeCheckboxIsChecked('input[name="q4"]');
  I.dontSeeCheckboxIsChecked('input[name="q5"]');
  I.dontSeeCheckboxIsChecked('input[name="q6"]');
});
