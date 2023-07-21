# blocks are denoted with a do..end
i = 0
# loop do
#   i = i + 1
#   puts "hello #{i}"
  
#   # if (i > 10)
#   #   break
#   # end

#   break if (i > 10)
# end

i = 0

while i < 10 do
  i += 1
  puts "hello #{i}"
end

# game_over = false

# while (!game_over) do

# end

# until (game_over) do 
#   game_over = true
# end

names = ['alice', 'bob', 'carol']

# js for..of => ruby for..in
for name in names do
  puts "hello there #{name}"
end

names.each do |name|
  puts "hello #{name}"
end
