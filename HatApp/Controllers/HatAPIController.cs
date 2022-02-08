using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HatApp.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class HatAPIController
    {
        DAL db = new DAL();

        [HttpGet("hats")]
        public List<Hats> GetHats()
        {
            return db.AllHats();
        }

        [HttpGet("users")]
        public List<Users> GetUsers()
        {
            return db.AllUser();
        }

        [HttpGet("GetHat/{id}")]
        public List<Hats> GetHat(int id)
        {
            return db.GetHats(id);
        }

        [HttpGet("GetUser/{id}")]
        public List<Users> GetUsers(int id)
        {
           return db.GetUser(id);
        }

        [HttpDelete("DeleteUser/{id}")]
        public void DeleteUser(int id)
        {
            db.DeleteUser(id);
        }

        [HttpDelete("DeleteHat/{id}")]
        public void DeleteHat(int id)
        {
            db.DeleteHat(id);
        }


        [HttpPut("updateuser")]
        public void UpdateUser(Users u)
        {
            db.UpdateUser(u);
            

        }

        [HttpPut("updatehat")]
        public void UpdateHat(Hats h)
        {
            db.UpdateHat(h);


        }

        [HttpGet("GetMyHat/{id}")]
        public List<MyHats> GetMyHat(int id)
        {
            return db.GetMyHat(id);
        }

        [HttpGet("GetAllMyHats")]
        public List<MyHats> GetAllMyHats()
        {
            return db.GetAllMyHats();
        }

        [HttpDelete("DeleteMyHat/{id}")]
        public void DeleteMyHat(int id)
        {
            db.DeleteMyHat(id);
        }

        [HttpGet("AddMyHats")]
        public void AddMyHats(int userid, int hatid)
        {
            db.AddMyHats(userid, hatid);
        }
        [HttpGet("GetUserModel/{id}")]
        public Users GetUserModel(int id)
        {
            return db.GetUserByID(id);
        }
        [HttpGet("GetMonthlyHat/{id}")]
        public List<MonthlyHats> GetMonthlyHat(int id)
        {
            return db.GetMonthlyHat(id);
        }

        [HttpGet("GetMyHatByUserID/{id}")]
        public List<MyHats> GetMyHatByUserID(int id)
        {
            return db.GetMyHatByUserID(id);
        }

        [HttpGet("GetAllMonthlyHats")]
        public List<MonthlyHats> GetAllMonthlyHats()
        {
            return db.GetAllMonthlyHats();
        }

        [HttpGet("MonthlyHats")]
        public void CreateMonthlyHats(int u, int h, string d)
        {
            db.CreateMonthlyHat(u,h,d);
        }
    }
}
