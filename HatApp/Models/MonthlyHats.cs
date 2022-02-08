using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace HatApp
{
    public class MonthlyHats
    {

        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int HatId { get; set; }
        public string LastWornDate { get; set; }

        public MonthlyHats(int userid, int hatid, string lastworndate)
        {

            this.UserId = userid;

            this.HatId = hatid;

            this.LastWornDate = lastworndate;
        }

        public MonthlyHats()
        { }

    }
}
