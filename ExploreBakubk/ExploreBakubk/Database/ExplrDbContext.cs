using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ExploreBakubk.Contracts;
using ExploreBakubk.Database.DomainModels;
using ExplrDbContext;

namespace ExploreBakubk.Database
{
    public class ExplrDbContext : DbContext
    {
        public ExplrDbContext(DbContextOptions<ExplrDbContext> dbContextOptions)
            : base(dbContextOptions) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Product>()
                .ToTable("products", t => t.ExcludeFromMigrations());

            modelBuilder
                .Entity<Category>()
                .ToTable("categories", t => t.ExcludeFromMigrations());

            modelBuilder
                .Entity<User>()
                .HasData(
                    new User
                    {
                        Id = -1,
                        Name = "Admin",
                        LastName = "Admin",
                        Email = "super_admin@gmail.com",
                        Password = "123321",
                        IsAdmin = true
                    }
                );

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }

    }
}