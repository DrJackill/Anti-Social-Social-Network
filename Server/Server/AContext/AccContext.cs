using System;
using Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.AContext
{
    public class AccContext : DbContext
    {
        public AccContext(DbContextOptions<AccContext> options) : base(options)
        {
        }
        public DbSet<Account> Account { get; set; }

    }
}
