using Pite.Models;
using Microsoft.EntityFrameworkCore;

namespace Pite
{
    public class DBContext : DbContext
    {
        public DbSet<Juguete> Juguete { get; set; }

        public DBContext(DbContextOptions<DBContext> options): base(options)
        {

        }

    }
}
