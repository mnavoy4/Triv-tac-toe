# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'rest-client'

rest_client = RestClient.get 'https://opentdb.com/api.php?amount=50&category=32&type=multiple'
results_array = JSON.parse(rest_client)
results_array["results"].each do |trivia|
  Trivium.create(
    question: trivia["question"],
    correct_answer: trivia["correct_answer"],
    incorrect_answers: trivia["incorrect_answers"]
  )
end
