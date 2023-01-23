defmodule ZWalletApiWeb.KeyControllerTest do
  use ZWalletApiWeb.ConnCase

  import ZWalletApi.KeysFixtures

  alias ZWalletApi.Keys.Key

  @create_attrs %{
    name: "some name",
    value: "some value"
  }
  @update_attrs %{
    name: "some updated name",
    value: "some updated value"
  }
  @invalid_attrs %{name: nil, value: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all keys", %{conn: conn} do
      conn = get(conn, Routes.key_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create key" do
    test "renders key when data is valid", %{conn: conn} do
      conn = post(conn, Routes.key_path(conn, :create), key: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.key_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "name" => "some name",
               "value" => "some value"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.key_path(conn, :create), key: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update key" do
    setup [:create_key]

    test "renders key when data is valid", %{conn: conn, key: %Key{id: id} = key} do
      conn = put(conn, Routes.key_path(conn, :update, key), key: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.key_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "name" => "some updated name",
               "value" => "some updated value"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, key: key} do
      conn = put(conn, Routes.key_path(conn, :update, key), key: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete key" do
    setup [:create_key]

    test "deletes chosen key", %{conn: conn, key: key} do
      conn = delete(conn, Routes.key_path(conn, :delete, key))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.key_path(conn, :show, key))
      end
    end
  end

  defp create_key(_) do
    key = key_fixture()
    %{key: key}
  end
end
