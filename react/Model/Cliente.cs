using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace react.Model
{
    public class Cliente
    {
        [Key]
        public int id_cliente { get; set; }
        public string nome { get; set; }
        public string cpf { get; set; }
    }
}
