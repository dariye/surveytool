require 'rails_helper'

FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    firstname { Faker::Name.name }
    lastname { Faker::Name.name }
    response = []
    3.times do
      response.push({ question: Faker::Lorem.sentence, anwer: Faker::Lorem.word})
    end
  end
end

