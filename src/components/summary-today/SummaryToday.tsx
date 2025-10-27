function SummaryToday() {
    return (
        <div className="flex flex-col gap-[25px] ml-5 xl:ml-25 w-[250px]">
            <h2 className="text-[21px] font-bold">Сегодня</h2>
            <ul className="flex gap-1 justify-between text-btn underline items-center">
                <li><a className="hover:text-btn-hover" href="#">общая сводка</a></li>
                <span className="h-[15px] border-l border-black" />
                <li><a className="hover:text-btn-hover" href="#">отключения</a></li>
            </ul>
        </div>
    );
}

export default SummaryToday;