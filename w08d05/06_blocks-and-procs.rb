# block is denoted with a do..end
# Proc(edure) stored block in memory

names = ['alice', 'bob', 'carol']

# names.each do |name|
#   puts "hello #{name}"
# end

my_block = Proc.new do |name|
  puts "hello #{name}"
end

# another_var = my_block

names.each &my_block

animals = ['dog', 'cat', 'horse']

animals.each &my_block
