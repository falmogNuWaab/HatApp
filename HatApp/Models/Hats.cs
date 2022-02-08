using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace HatApp
{
    public class Hats
    {

        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public string Material { get; set; }
        public string Color { get; set; }
        public string Images { get; set; }
        public string Facts { get; set; }


        public Hats(string type, string material, string color, string images, string facts)
        {
            this.Type = type;

            this.Material = material;

            this.Color = color;

            this.Images = images;

            this.Facts = facts;
        }

        public Hats()
        { }
    }
}
