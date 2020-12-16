class CreateDmessages < ActiveRecord::Migration[5.2]
  def change
    create_table :dmessages do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    add_index :dmessages, :body
    add_index :dmessages, :author_id
    add_index :dmessages, :channel_id
  end
end
