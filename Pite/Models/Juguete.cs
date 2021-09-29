using System.ComponentModel.DataAnnotations;


namespace Pite.Models
{
    public class Juguete
    {
        public int id { get; set;}
        [Required]
        public string nombre { get; set; }
        [Required]
        public decimal precio { get; set; }
        [Required]
        public string fabricante { get; set; }
        public string descripcion { get; set; }
        public int restriccion { get; set; }

    }
}
