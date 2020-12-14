class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :like
      t.references :user
      t.references :post

      t.timestamps
    end
  end
end
