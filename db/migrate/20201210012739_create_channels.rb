class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.boolean :public, default: true

      t.timestamps
    end
    add_index :channels, :name, unique: true
  end
end
