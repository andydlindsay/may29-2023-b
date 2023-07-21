class Car
  def initialize(make, model, year)
    @make = make
    @model = model
    @year = year
  end

  # attr_reader :model
  # attr_writer :model
  attr_accessor(:year, :make, :model)

  # def make
  #   return @make
  # end

  # def make= new_make
  #   @make = new_make
  # end
end

# car = new Car()
car = Car.new('Toyota', 'Tercel', 1986)

p car

p car.make()

car.make = 'Ford'

p car
p car.model

car.model = 'F150'

p car

p car.year
car.year = 2011
p car

# car.each do |arr|
#   p arr
# end
