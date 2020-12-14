# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

@admin = User.create!(username: 'Stephen', email: 'stephensayage@email.com', password: '123456', first_name: 'Stephen', last_name: 'Sayage', image:'https://i.imgur.com/Oa8vj5W.jpg')
