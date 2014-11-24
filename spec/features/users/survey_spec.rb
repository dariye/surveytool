require 'rails_helper'

feature 'Survey', js: true do
  before do
    visit '/demo'
  end

  scenario 'visit pages' do
    expect(page).to have_content('NO YES')
  end


end