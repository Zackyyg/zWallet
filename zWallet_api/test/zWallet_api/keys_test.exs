defmodule ZWalletApi.KeysTest do
  use ZWalletApi.DataCase

  alias ZWalletApi.Keys

  describe "keys" do
    alias ZWalletApi.Keys.Key

    import ZWalletApi.KeysFixtures

    @invalid_attrs %{name: nil, value: nil}

    test "list_keys/0 returns all keys" do
      key = key_fixture()
      assert Keys.list_keys() == [key]
    end

    test "get_key!/1 returns the key with given id" do
      key = key_fixture()
      assert Keys.get_key!(key.id) == key
    end

    test "create_key/1 with valid data creates a key" do
      valid_attrs = %{name: "some name", value: "some value"}

      assert {:ok, %Key{} = key} = Keys.create_key(valid_attrs)
      assert key.name == "some name"
      assert key.value == "some value"
    end

    test "create_key/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Keys.create_key(@invalid_attrs)
    end

    test "update_key/2 with valid data updates the key" do
      key = key_fixture()
      update_attrs = %{name: "some updated name", value: "some updated value"}

      assert {:ok, %Key{} = key} = Keys.update_key(key, update_attrs)
      assert key.name == "some updated name"
      assert key.value == "some updated value"
    end

    test "update_key/2 with invalid data returns error changeset" do
      key = key_fixture()
      assert {:error, %Ecto.Changeset{}} = Keys.update_key(key, @invalid_attrs)
      assert key == Keys.get_key!(key.id)
    end

    test "delete_key/1 deletes the key" do
      key = key_fixture()
      assert {:ok, %Key{}} = Keys.delete_key(key)
      assert_raise Ecto.NoResultsError, fn -> Keys.get_key!(key.id) end
    end

    test "change_key/1 returns a key changeset" do
      key = key_fixture()
      assert %Ecto.Changeset{} = Keys.change_key(key)
    end
  end
end
