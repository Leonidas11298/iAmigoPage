import { CalendarCheck, HeartPlus, ShoppingBag } from "lucide-react";

export const services = [
    {
      title: "Agenda de Citas Automatizada",
      description: "Automatiza la gestion de tus citas con clientes ademas de recolectar datos de clientes para almacenarlos en tu CRM",
      icon: (<CalendarCheck />),
    },
    {
      title: "Marketing Automatizado",
      description: "Gestiona tus redes sociales y campañas de marketing de manera automatizada, ahorrando tiempo y esfuerzo.",
      icon: (
        <HeartPlus />
      ),
    },
    {
      title: "Agente de Ventas",
      description: " Automatiza el proceso de ventas y mejora la experiencia del cliente capaz de aprender y adaptarse a tu negocio.",
      icon: (
        <ShoppingBag />
      ),
    },
  ];