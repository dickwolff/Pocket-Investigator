import Dexie from "dexie";
import { DexieService } from "./dexie.service";

export class DatabaseService<T> {
  public data: Dexie.Table<T, string>;

  constructor(
    private dexieService: DexieService,
    private tableName: string,
    private schema: { [key: string]: string | null }) {

    // Set the schema.
    this.dexieService.version(1).stores(this.schema);

    // Attach the data object.
    this.data = this.dexieService.table(this.tableName);
  }

  /**
   * Get all items from the table.
   */
  public async getAsync(): Promise<any> {
    return await this.data.toArray();
  }

  /**
   * Get an item by a given key.
   *
   * @param key The key of the item to retrieve.
   */
  public async getByKeyAsync(key: string): Promise<T> {
    return await this.data.get(key);
  }

  public async keyExistsAsync(key): Promise<boolean> {
    return await this.data.get(key) !== undefined;
  }

  /**
   * Add a new item to the table.
   *
   * @param data The item to add.
   */
  public async addAsync(data: T): Promise<string> {
    return await this.data.add(data);
  }

  /**
   * Update an item in the table.
   *
   * @param key The key of the item to update.
   * @param data The new state of the object.
   */
  public async updateAsync(key: string, data: T): Promise<number> {
    return await this.data.update(key, data);
  }

  /**
   * Delete all data from the table.
   */
  public async deleteAsync(): Promise<void> {
    return await this.data.clear();
  }

  /**
   * Delete a specific item from the table.
   *
   * @param key The key of the item to delete.
   */
  public async deleteByKeyAsync(key: string): Promise<void> {
    return await this.data.delete(key);
  }
}
