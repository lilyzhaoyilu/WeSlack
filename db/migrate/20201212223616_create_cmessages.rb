class CreateCmessages < ActiveRecord::Migration[5.2]
  def change
    create_table :cmessages do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    add_index :cmessages, :body
    add_index :cmessages, :author_id
    add_index :cmessages, :channel_id
  end
end
