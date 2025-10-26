import { useNavigate } from "react-router-dom";
import { Button } from "~/shared/ui/button";
import { LoanFormStepPaths } from "~/entities/loan";
import {
  Rocket,
  ShieldCheck,
  MousePointerClick,
  ArrowRight,
} from "lucide-react";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="
        flex flex-col items-center justify-center
        min-h-[80vh] text-center p-4
      "
    >
      <h1
        className="
          text-4xl md:text-5xl
          font-bold tracking-tight mb-4
        "
      >
        Быстрые займы онлайн
      </h1>
      <p
        className="
          text-lg md:text-xl
          text-muted-foreground max-w-2xl mb-8
        "
      >
        Получите нужную сумму в несколько кликов. Просто, быстро и безопасно.
      </p>

      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8 md:gap-12 mb-12
        "
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <Rocket className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold">Мгновенное решение</h3>
            <p className="text-sm text-muted-foreground">
              Ответ по заявке в течение 5 минут
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <ShieldCheck className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold">Безопасные платежи</h3>
            <p className="text-sm text-muted-foreground">
              Ваши данные под защитой
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <MousePointerClick className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold">Все онлайн</h3>
            <p className="text-sm text-muted-foreground">
              От заявки до получения денег
            </p>
          </div>
        </div>
      </div>

      <Button size="lg" onClick={() => navigate(LoanFormStepPaths.PersonalData)} className="group">
        Оформить займ
        <ArrowRight
          className="
            inline-block h-4 w-4 ml-2
            transition-transform group-hover:translate-x-1
          "
        />
      </Button>
    </div>
  );
}
