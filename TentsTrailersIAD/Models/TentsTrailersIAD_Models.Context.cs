﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TentsTrailersIAD.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class TentsTrailersIADEntities : DbContext
    {
        public TentsTrailersIADEntities()
            : base("name=TentsTrailersIADEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<Booking> Bookings { get; set; }
        public virtual DbSet<Campsite> Campsites { get; set; }
        public virtual DbSet<Member> Members { get; set; }
        public virtual DbSet<Rating> Ratings { get; set; }
        public virtual DbSet<Registration> Registrations { get; set; }
    }
}
