using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;



namespace HatApp
{
    public class MyHats
    {



        [Key]
        public int id { get; set; }
        public int userid { get; set; }
        public int hatid { get; set; }



        public MyHats(int userid, int hatid)
        {



            this.userid = userid;



            this.hatid = hatid;
        }



        public MyHats()
        { }



    }
}
