class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :position

      t.references :team, foreign_key: true, index: true

      t.timestamps
    end
  end
end
