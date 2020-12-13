# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_12_223616) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_users", force: :cascade do |t|
    t.integer "channel_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_channel_users_on_channel_id"
    t.index ["user_id"], name: "index_channel_users_on_user_id"
  end

  create_table "channels", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "public", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.index ["name"], name: "index_channels_on_name", unique: true
  end

  create_table "cmessages", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_cmessages_on_author_id"
    t.index ["body"], name: "index_cmessages_on_body"
    t.index ["channel_id"], name: "index_cmessages_on_channel_id"
  end

  create_table "dm_channels", force: :cascade do |t|
    t.integer "user1", null: false
    t.integer "user2", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user1"], name: "index_dm_channels_on_user1"
    t.index ["user2"], name: "index_dm_channels_on_user2"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "displayed_name"
    t.string "image_url", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["displayed_name"], name: "index_users_on_displayed_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
