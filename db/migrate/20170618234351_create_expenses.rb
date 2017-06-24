class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.string :title
      t.date :date
      t.decimal :amount
      t.string :notes

      t.timestamps
    end
  end
end
