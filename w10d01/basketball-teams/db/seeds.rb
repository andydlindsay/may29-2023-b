# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating the seeds"

puts "creating the teams"

30.times do
  Team.create(
    name: Faker::Sports::Basketball.team,
    coach: Faker::Sports::Basketball.coach
  )
end

puts "retrieving the teams"

teams = Team.all

puts "creating the players"

100.times do
  Player.create(
    name: Faker::Sports::Basketball.player,
    position: Faker::Sports::Basketball.position,
    team: teams.sample
  )
end

puts "all done!"
