select "c"."firstName" as "First Name",
       "c"."lastName" as "Last Name",
       "p"."amount" as "Payment Amount"
from "customers" as "c"
join "payments" as "p" using ("customerId")
order by "p"."amount" desc
limit 10;
