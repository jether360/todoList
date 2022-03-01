using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class TodoListDBContext : DbContext
    {
        public TodoListDBContext(DbContextOptions<TodoListDBContext> options) : base(options)
        {
        }

        public DbSet<DTodoList> DTodoLists { get; set; }
    }
}