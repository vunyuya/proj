using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;

namespace test1.Models
{
    public class ProductContext
    {
        IMongoDatabase database;
        IGridFSBucket gridFS;

        public ProductContext ()
        {
                 // строка подключения
                string connectionString = "mongodb://localhost:27017/mobilestore";
                var connection = new MongoUrlBuilder(connectionString);
                // получаем клиента для взаимодействия с базой данных
                MongoClient client = new MongoClient(connectionString);
                // получаем доступ к самой базе данных
                database = client.GetDatabase(connection.DatabaseName);
                 // получаем доступ к файловому хранилищу
                 gridFS = new GridFSBucket(database);
        }
        private IMongoCollection<Product> Products
        {
            get { return database.GetCollection<Product>("Products"); }
        }
        public async Task Create(Product p)
        {
            await Products.InsertOneAsync(p);
        }

        public IEnumerable<Product> GetProducts()
        {
            var builder = new FilterDefinitionBuilder<Product>();
            var filter = builder.Empty;
            return  Products.Find(filter).ToList();
        }
    }
}
