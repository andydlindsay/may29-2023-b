def say_hello name, age = 42
  my_str = "hello there #{name} and you are #{age}"
  # puts my_str
  my_str

  return 2 + 2
end

return_val = say_hello('Alice', 50)

puts "!!!return val is: #{return_val}"
