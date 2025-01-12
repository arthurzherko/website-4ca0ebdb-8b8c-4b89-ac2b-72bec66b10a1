import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { bookingSchema, type BookingFormData } from '@/lib/booking';
import { SERVICES } from '@/lib/constants';
export function BookingForm() {
  const form = useForm<BookingFormData>({ resolver: zodResolver(bookingSchema) });
  const onSubmit = (data: BookingFormData) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 gamer-card p-6">
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gamer-primary">Выберите сервис</FormLabel>
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="bg-gamer-background border-gamer-primary">
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gamer-primary">Ваше имя</FormLabel>
              <FormControl>
                <Input {...field} className="bg-gamer-background border-gamer-primary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gamer-primary">Телефон</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="+7XXXXXXXXXX"
                  className="bg-gamer-background border-gamer-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="gamer-button w-full">
          Забронировать
        </Button>
      </form>
    </Form>
  );
}
