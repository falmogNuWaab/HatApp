using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace HatApp
{
    public class Users
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Hats HatOfTheDay { get; set; }
        public List<Hats> MyCollection { get; set; } = new List<Hats>();
        public List<Hats> Worn30 { get; set; } = new List<Hats>();
        
        public Users(string firstname, string lastname)
        {
            this.FirstName = firstname;
            this.LastName = lastname;
        }

        public Users()
        {

        }
    }
}

