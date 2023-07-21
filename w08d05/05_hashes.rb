# hash => collection of key/value pairs, JS object, Python dictionary, associative array

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user

# puts user["username"]

# symbol :username

user = {
  :username => 'jstamos',
  :password => '1234'
}

# p user
# puts user

# p user[:username]
# puts :my_sym.to_s == "my_sym".to_sym

# puts "hello #{:my_sym}"

user = {
  username: "jstamos",
  password: "1234"
}

puts user
puts user[:password]

puts

user.each do |arr|
  key = arr[0]
  value = arr[1]

  puts "#{key}: #{value}"
end
